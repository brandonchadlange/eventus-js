const { useEventus } = require("./");

const eventus = useEventus({
  client_id: "c64ad7fb-80dd-4989-948a-77f6c4216f4a",
});

const start = async () => {
  const response = await eventus.trigger(
    "22913cff-dd73-4af7-8948-a6c48dd2596a",
    { id: "asdf" }
  );
  console.log(response.data);
};

start();
