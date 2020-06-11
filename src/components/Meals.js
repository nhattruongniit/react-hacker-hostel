import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

const Meals = (({nameHacker, day }) => {
    return (<div className="col-xs-12  col-sm-12 col-md-12 col-lg-12">
            <ol id="list">
            <div>
                        <li className="morning">Breakfast for {nameHacker} on {day}</li>
                        <li className="afternoon">Lunch for {nameHacker} on {day}</li>
                        <li className="night">Dinner for {nameHacker} on {day}</li>
                    </div>
            </ol>
        </div>);
});
export default Meals;
