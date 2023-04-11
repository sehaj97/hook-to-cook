function CardCrousel(props) {
  return (
    <div class="col-12 col-sm-8 col-md-6 col-lg-4">
      <div class="card">
        <img
          class="card-img"
          src={props.bgSrc}
          style={{
            width: "294px",
            height: "200px",
          }}
        />
        <div
          class="card-img-overlay text-white bg-success p-1 bg-opacity-50 d-flex flex-column justify-content-center"
          style={{
            width: "150px",
          }}
        >
          <div
            class="card-title d-flex justify-content-center"
            style={{
              fontSize: "15px",
            }}
          >
            {props.cardTitle}
          </div>
          <div class="link d-flex justify-content-center">
            <a
              href={`https://www.google.com/search?q=${props.cardTitle}`}
              class="card-link text-warning"
              target="_blank"
              style={{
                fontSize: "15px",
              }}
            >
              {props.cardLinkTitle}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardCrousel;
