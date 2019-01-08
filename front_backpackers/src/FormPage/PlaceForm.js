import React, { Fragment } from "react";
import { Row, Col } from "reactstrap";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { geolocated } from "react-geolocated"
import "./FormPage.scss";
import MapPlaceCreation from "./MapPlaceCreation";

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  }
  console.log(errors);
  return errors;
};

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <input
      {...input}
      placeholder={label}
      type={type}
      className="field w-100 mt-2"
    />
    {touched && (error && <span className="formRequired">{error}</span>)}
  </div>
);

const PlaceForm = props => {
  const { handleSubmit, submitting } = props;
  return (
    <Fragment>
      <Row className="greenHeader text-white">
        <Col xs="2">
          <Link to="/" className="price text-primary">
            <i className="fas fa-chevron-left text-white" />
          </Link>
        </Col>
        <Col xs="8">
          <p className="text-center mb-0">Ajouter un lieu</p>
        </Col>
      </Row>
      <h2 className="pt-3">Votre annonce</h2>
      <div className="activitiesTitleUnderline mb-3 w-100" />

      <div className="mb-5">

        <form onSubmit={handleSubmit}>
          <div>
            <Field type="select" name="type" id="type" component="select" label="Type">
              <option>Catégorie</option>
              <option value="Apéritifs">Apéritifs</option>
              <option value="Aquatique">Aquatique</option>
              <option value="Aventure">Aventure</option>
              <option value="Bien-être">Bien-être</option>
              <option value="Culturel">Culturel</option>
              <option value="Déplacements">Déplacements</option>
              <option value="Enfants">Enfants</option>
              <option value="Nocturne">Nocturne</option>
              <option value="Restauration">Restauration</option>
            </Field>
          </div>
          <div>
            <Field
              id="name"
              name="name"
              component={renderField}
              type="text"
              label="Nom du lieu"
            />
            <Field
              id="decription"
              name="description"
              component="textarea"
              type="text"
              placeholder="Description"
              className="field w-100 mt-2"
            />
            <Field
              id="price"
              type="number"
              name="price"
              component={renderField}
              label="Prix"
            />

            <h2 className="pt-3">Localisation</h2>
            <div className="activitiesTitleUnderline mb-3 w-100" />


            {props.position.length !== 2 ?
              "" :
              <MapPlaceCreation center={props.position} />
              // console.log("lol", props.position)
            }

            < Field
              id="country"
              name="country"
              component={renderField}
              type="text"
              label="Pays"
            />
            <Field
              id="city"
              name="city"
              component={renderField}
              type="text"
              label="Ville"
            />
            <Field
              id="address"
              name="address"
              component={renderField}
              type="text"
              label="Adresse"
            />
            <Field
              id="latitude"
              type="number"
              name="latitude"
              component={renderField}
              label="Latitude"
            /><Field
              id="longitude"
              type="number"
              name="longitude"
              component={renderField}
              label="Longitude"
            />
          </div>
          <button type="submit" disabled={submitting} className="mt-3 postBtn">
            Etape 2
          </button>
        </form>
      </div>
    </Fragment>
  );
};

const PlaceFormContainer = reduxForm({
  form: "createPlace",
  validate
})(PlaceForm);

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(PlaceFormContainer);
