import re

import environ
import requests
import telebot
from telebot import types

env = environ.Env()
environ.Env.read_env(".env")

bot = telebot.TeleBot(env('TG_TOKEN'))

users = {}
record = {}


@bot.message_handler(content_types=['text'])
def get_text_messages(message):
    if message.text == "/start":
        bot.send_message(message.from_user.id, "Привет, введите свой снилс")
        bot.register_next_step_handler(message, get_snils)
    else:
        bot.send_message(message.from_user.id, "Я тебя не понимаю. Напиши /start.")


def get_snils(message):
    snils = message.text
    if validation_check(snils):
        users[message.from_user.id] = {
            'snils': snils,
        }
        bot.send_message(message.from_user.id, "Введите пароль")
        bot.register_next_step_handler(message, get_password)
    else:
        bot.send_message(message.from_user.id, "Неправильный формат снилса! Повторите попытку.")
        bot.register_next_step_handler(message, get_snils)


def get_password(message):
    password = message.text
    body = {
        'username': users[message.from_user.id]['snils'],
        'password': password,
    }
    r = requests.post('http://127.0.0.1:1883/api/auth/login/', data=body)
    if r.status_code == 200:
        users[message.from_user.id].update({
            'password': '14122000',
            'access_token': r.json()['access_token'],
            'refresh_token': r.json()['refresh_token'],
            'user_id': r.json()['user']['pk'],
        })
        bot.send_message(message.from_user.id, "Выберете действие:", reply_markup=markup)
        bot.register_next_step_handler(message, choose_action)
    else:
        bot.send_message(message.from_user.id, "Неправильный пароль! Повторите попытку.")
        bot.register_next_step_handler(message, get_password)


markup = types.ReplyKeyboardMarkup(row_width=2, one_time_keyboard=True)
itembtn1 = types.KeyboardButton('Посмотреть историю измерений')
itembtn2 = types.KeyboardButton('Добавить измерение')
markup.add(itembtn1, itembtn2)


def choose_action(message):
    if message.text == 'Посмотреть историю измерений':
        r = requests.get(f'http://127.0.0.1:1883/api/measurements/{users[message.from_user.id]["user_id"]}')
        measurements = r.json()['measurement']
        history = []
        for m in measurements[-10:]:
            temp = f'''дата: {m["created_at"][:10]},
верхнее давление: {m["pressure_high"]},
нижнее давление: {m["pressure_low"]},
пульс: {m["pulse"]},
тип: {m["type"]}'''
            bot.send_message(message.from_user.id, temp, reply_markup=markup)
        bot.register_next_step_handler(message, choose_action)
    else:
        bot.send_message(message.from_user.id, "верхнее давление")
        bot.register_next_step_handler(message, get_high_pressure)


def get_high_pressure(message):
    pressure = message.text
    record[message.from_user.id] = {
        'pressure_high': pressure,
    }
    bot.send_message(message.from_user.id, "нижнее давление")
    bot.register_next_step_handler(message, get_low_pressure)


def get_low_pressure(message):
    pressure = message.text
    record[message.from_user.id].update({
        'pressure_low': pressure,
    })
    bot.send_message(message.from_user.id, "пульс")
    bot.register_next_step_handler(message, get_pulse)


def get_pulse(message):
    pulse = message.text
    record[message.from_user.id].update({
        'pulse': pulse,
    })
    bot.send_message(message.from_user.id, "тип")
    bot.register_next_step_handler(message, get_type)


def get_type(message):
    type = message.text
    record[message.from_user.id].update({
        'type': type,
        'patient': users[message.from_user.id]['user_id']
    })
    r = requests.post('http://127.0.0.1:1883/api/measurement/', data=record[message.from_user.id])
    if r.status_code == 201:
        bot.send_message(message.from_user.id, "Запись сохраненна", reply_markup=markup)
    else:
        bot.send_message(message.from_user.id, "Произошла ошибка сохранения", reply_markup=markup)
        print(r.text)
    bot.register_next_step_handler(message, choose_action)


def validation_check(input_string):
    regex = re.compile('^\d{3}-\d{3}-\d{3}-\d{2}$')
    match = regex.match(str(input_string))
    return bool(match)


bot.polling(none_stop=True, interval=0)
