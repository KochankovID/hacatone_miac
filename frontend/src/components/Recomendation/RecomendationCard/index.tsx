import './style.css';

const RecomendationCard = ({ doctorName, data }: any) => {
  return (
    <div className="recomendation__card">
      <div className="recomendation__card-header">
        <span className="recomendation__card-header__title">
          {`Врач: ${doctorName}`}
        </span>
        <span className="recomendation__card-header__data">{data}</span>
      </div>
      <div className="recomendation__card-content">
        <p className="recomendation__text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
          molestiae reprehenderit velit, eveniet exercitationem cumque totam
          labore eum? Rerum reprehenderit obcaecati modi quaerat reiciendis, in
          voluptas deleniti, placeat dolor odio amet ad iusto optio aspernatur
          praesentium. Quod accusantium magni rerum tempore dignissimos quos?
          Excepturi, corporis odit odio magnam officia quidem eligendi ducimus
          cupiditate accusantium repellat quam voluptate, natus ipsa distinctio
          quod explicabo doloribus tenetur, animi laboriosam ex a nesciunt ab
          sapiente necessitatibus. Deleniti enim soluta perferendis, vero
          reiciendis culpa blanditiis animi quae pariatur dignissimos? Eveniet
          consequuntur tempora fugiat neque sequi impedit laboriosam expedita
          consequatur quia unde deserunt dolores accusantium minus omnis,
          repellat explicabo praesentium assumenda aperiam autem! Distinctio
          odit id quis dignissimos ad voluptas sapiente deserunt, explicabo
          aperiam sequi mollitia repellat provident, officiis non, quasi minima
          consequuntur enim rem numquam ea. Veniam, ipsum explicabo! Dolorum eos
          dicta ullam libero asperiores assumenda ea blanditiis ex nostrum?
          Aperiam dolorem hic ea autem inventore, molestias quas ipsa debitis
          voluptatem aliquam, similique, eveniet praesentium quidem velit minima
          laboriosam placeat ex at fuga veniam dicta esse architecto! Sunt,
          eaque saepe! Dolorem sint nesciunt exercitationem dolores neque quos
          magni deleniti dignissimos dolore, enim natus voluptatem assumenda
          deserunt officiis consequatur, labore excepturi molestiae rerum quasi
          hic aliquam voluptates! Iste exercitationem tempore obcaecati aliquid
          ab aliquam eum architecto deleniti. Necessitatibus corrupti,
          consectetur deserunt eius sint, distinctio quo omnis delectus nesciunt
          eum ratione incidunt quibusdam! Neque sequi quidem officia aut
          incidunt repellendus nihil, velit distinctio voluptas ipsam eaque
          harum error minima placeat odio, suscipit tempore. Rerum nulla
          voluptatum doloribus adipisci, deleniti iste eos optio, modi, ducimus
          assumenda cumque hic explicabo ut? Fugiat qui modi repellat reiciendis
          cupiditate saepe deserunt fugit dolor a unde adipisci vitae ex porro
          ipsum, facere quidem reprehenderit deleniti neque voluptatum optio
          voluptas aliquam voluptatem ea magni! Architecto excepturi doloremque,
          quo suscipit quas qui minima doloribus iste et neque eaque, deleniti
          impedit fugit! Explicabo delectus adipisci modi blanditiis laudantium
          excepturi, at dolor in. Atque impedit nostrum quam nihil explicabo
          odio minima dolorem a id quasi, consectetur non numquam obcaecati
          magnam esse qui veritatis quod voluptas et optio sunt enim sapiente
          corporis commodi? Ullam esse qui fuga enim doloremque nemo, optio
          assumenda et ut perspiciatis! Architecto, iste quae debitis et dolores
          velit temporibus aspernatur quos cupiditate! Cupiditate numquam itaque
          fugiat facilis provident possimus illo explicabo a architecto! Animi
          eos sapiente delectus, sed cum doloremque? Labore, tenetur? Omnis
          officiis dolor quod ullam placeat atque repellat earum quisquam
          distinctio.
        </p>
      </div>
    </div>
  );
};

export default RecomendationCard;
