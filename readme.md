# @eventus/eventus-js

eventus-js is a javascript library used to trigger events for Eventus.

## Installation

Install eventus-js using:

```bash
npm install @eventus/eventus-js
```

or

```bash
yarn add @eventus/eventus-js
```

## Usage

```typescript
import { useEventus } from "@eventus/eventus-js";

// initialise api
const eventus = useEventus({
  client_id: "", // your client id
});

eventus.trigger("{EVENT_ID}", { message: "custom payload" });
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
