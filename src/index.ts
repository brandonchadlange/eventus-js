import triggerEvent from "./trigger";

interface UseEventusProps {
  client_id: string;
}

export const useEventus = (props: UseEventusProps) => {
  return {
    trigger: <T>(event_id: string, payload?: T) =>
      triggerEvent({
        clientId: props.client_id,
        eventId: event_id,
        payload,
      }),
  };
};
