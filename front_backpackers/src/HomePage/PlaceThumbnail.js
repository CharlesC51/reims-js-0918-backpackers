import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Row, Col, Media, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { Spring } from "react-spring";

const PlaceThumbnail = ({
  id,
  picture,
  name,
  city,
  description,
  price,
  viewPlace
}) => (
  <Spring
    from={{ opacity: 0, position: "relative", right: 100 }}
    to={{ opacity: 1, position: "relative", right: 0 }}
  >
    {props => (
      <div style={props}>
        <Row>
          <Col xs="12">
            <Media className="d-flex align-items-stretch">
              <Media left href="#">
                <Media
                  object
                  src={`http://localhost:3010/api/images/${picture}`}
                  alt="picture of place"
                  className="placePicture"
                />
              </Media>
              <Media body className="d-flex flex-column">
                <Media
                  heading
                  className="mb-1 mx-1 d-flex justify-content-between"
                >
                  <span>
                    <i className="fas fa-location-arrow pr-1" />
                    {city}
                  </span>
                  <span>
                    <i className="fas fa-archway pr-1" />
                    {name}
                  </span>
                </Media>
                {description}
                <div className="d-flex align-items-end justify-content-between mt-auto">
                  <Link to={`/place/${id}`}>
                    <Button onClick={viewPlace} className="seeItem">
                      Voir
                    </Button>
                  </Link>{" "}
                  <span className="itemListPrice pr-2">
                    {price ? (
                      <Fragment>
                        {price}€ /
                        <i className="far fa-user" />
                      </Fragment>
                    ) : (
                      "Gratuit"
                    )}
                  </span>
                </div>
              </Media>
            </Media>
          </Col>
        </Row>
      </div>
    )}
  </Spring>
);

PlaceThumbnail.propTypes = {
  city: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number
};

export default PlaceThumbnail;
