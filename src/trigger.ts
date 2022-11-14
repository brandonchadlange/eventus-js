import axios from "axios";

import {
  CLIENT_ID_HEADER,
  EVENTUS_API_URL,
  TRIGGER_EVENT_ENDPOINT,
} from "./constants";

interface TriggerEventParams<T> {
  clientId: string;
  eventId: string;
  payload: T;
}

const triggerEvent = async <T>(params: TriggerEventParams<T>) => {
  const { clientId, eventId, payload } = params;

  try {
    const fullUrl = EVENTUS_API_URL + TRIGGER_EVENT_ENDPOINT + eventId;
    const response = await axios.post(fullUrl, payload, {
      headers: {
        [CLIENT_ID_HEADER]: clientId,
      },
    });

    return response;
  } catch (err) {
    console.error("Error", err);
  }
};

export default triggerEvent;
