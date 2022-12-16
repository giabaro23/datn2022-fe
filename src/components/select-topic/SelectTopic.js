import React from 'react';
import Form from "react-bootstrap/Form";
import { LOCATION, TOPIC_ALL } from "../../common/constants";
import './SelectTopic.scss'

const SelectTopic = () => {
    return (
        <div>
            <Form.Select className="select__topic">
                    {TOPIC_ALL.map((topic) => {
                      return (
                        <optgroup label={topic.topicName}>
                          {topic.subTopic.map((item) => {
                            return <option>{item}</option>;
                          })}
                        </optgroup>
                      );
                    })}
                  </Form.Select>
        </div>
    );
};

export default SelectTopic;