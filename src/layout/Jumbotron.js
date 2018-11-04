import React from "react";

export default function Jumbotron() {
  return (
    <div>
      <h1 className="display-4">Public Event Organizer</h1>
      <p className="lead">
        <h3 className="display-4">
          <h1 className="display-4" />
        </h3>
        We are bringing completely new experience for people hosting and
        attending various types of events. We do this by analyzing their
        personalities and characteristics and putting them together with people
        of similar interests. Doing this we try to improve networking among
        people.
      </p>
      <hr className="my-4" />
      <p>
        This platform is intended to make event-hosters' job easier. This is
        done through our effective usage of special algorithms that gather
        information about the attendees from their activity on social networks
        and arranges their seats close to peope wih the same interests. If this
        is not available, we suggest the attendees to take a questionnaire on
        their interests and characteristics after which we can implement our
        algorithms to match these people and arrange them seats with people
        close to their interests.
      </p>
      <div class="text-center">
        <button
          class="btn btn-primary btn-sx"
          type="button"
          style={{ fontSize: "22px" }}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
