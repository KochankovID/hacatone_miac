package com.example.example.model;

import com.google.gson.annotations.SerializedName;

import java.util.List;

import lombok.Data;

@Data
public class UserMeasurement extends UserAbstract {


    @SerializedName("measurement")
    private List<Measurement> measurements;

}
