# Race conditions prevention

The main concern with race conditions in React are with out sync state updates and API calls.

to prevent race conditions, we need to cancel any running API calls if the useEffect is triggered. Obviously, this only concern the API calls made within the useEffect and not all API calls. This happen through the AbortController who is responsible for sending the cancellation signal to the fetch API. This cancellation is triggered in the cleanup function of the useEffect where it will execute after the component is unmounted or rerendered.

Also, while not a race condition, cancelling the interval, if used, should also be considered in the cleanup function to avoid memory leaks.
