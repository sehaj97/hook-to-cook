import { useState, useEffect } from "react";

import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import CardCrousel from "../components/RecipeCrousel";

function RecipesPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "d9dad9296bmsha7000b8f518c02dp17e1bdjsn8996493bf2b7",
          "X-RapidAPI-Host": "random-recipes.p.rapidapi.com",
        },
      };
      const response = await fetch(
        "https://random-recipes.p.rapidapi.com/ai-quotes/20",
        options
      );
      const newData = await response.json();
      setData(newData);
    };

    fetchData();
  }, []);
  return (
    <div
      className="d-flex justify-content-center align-items-center mt-5"
      id="recipes"
    >
      <Card
        border="secondary"
        style={{
          width: "22rem",
          height: "90vh",
          maxHeight: "90vh",
          overflowY: "auto",
          marginBottom: "50px",
        }}
      >
        <Card.Body>
          <Card.Title className="text-start" style={{ fontSize: "3rem" }}>
            Welcome Great chef!
          </Card.Title>
          <Card.Title className="text-start" style={{ fontSize: "1rem" }}>
            Trending from Chef's Kitchen...
          </Card.Title>

          <Carousel fade>
            <Carousel.Item>
              <div class="container">
                <div class="row">
                  <CardCrousel
                    bgSrc={data && data[0].image}
                    cardTitle={data && data[0].title}
                    cardLinkTitle="Let's Cook"
                  ></CardCrousel>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div class="container">
                <div class="row">
                  <CardCrousel
                    bgSrc={data && data[1].image}
                    cardTitle={data && data[1].title}
                    cardLinkTitle="Let's Cook"
                  ></CardCrousel>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div class="container">
                <div class="row">
                  <CardCrousel
                    bgSrc={data && data[2].image}
                    cardTitle={data && data[2].title}
                    cardLinkTitle="Let's Cook"
                  ></CardCrousel>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div class="container">
                <div class="row">
                  <CardCrousel
                    bgSrc={data && data[3].image}
                    cardTitle={data && data[3].title}
                    cardLinkTitle="Let's Cook"
                  ></CardCrousel>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div class="container">
                <div class="row">
                  <CardCrousel
                    bgSrc={data && data[4].image}
                    cardTitle={data && data[4].title}
                    cardLinkTitle="Let's Cook"
                  ></CardCrousel>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div class="container">
                <div class="row">
                  <CardCrousel
                    bgSrc={data && data[5].image}
                    cardTitle={data && data[5].title}
                    cardLinkTitle="Let's Cook"
                  ></CardCrousel>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div class="container">
                <div class="row">
                  <CardCrousel
                    bgSrc={data && data[6].image}
                    cardTitle={data && data[6].title}
                    cardLinkTitle="Let's Cook"
                  ></CardCrousel>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>

          <Card.Title
            className="text-start"
            style={{ fontSize: "1.5rem", marginTop: "20px" }}
          >
            Recommendations
          </Card.Title>

          <div class="container">
            {data &&
              data.map((dataItem) => {
                return (
                  <a
                    href={`https://www.google.com/search?q=${dataItem.title}`}
                    target="_blank"
                    className="row m-2"
                  >
                    <Card border="warning text-middle">
                      <Card.Body className="text-start p-0">
                        <div className="row p-1">
                          <div className="col-3 p-0">
                            <img
                              src={dataItem.image}
                              className="img-thumbnail rounded-circle"
                              style={{ width: "320px", height: "60px" }}
                            />
                          </div>
                          <div className="col-9 text-middle">
                            {dataItem.title}
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </a>
                );
              })}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default RecipesPage;
