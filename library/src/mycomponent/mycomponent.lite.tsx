import { For, Show, useStore } from "@builder.io/mitosis";

export function MyComponent(props) {
  const state = useStore({
    newItemName: "New item",
    list: ["hello", "world"],
    addItem() {
      state.list = [...state.list, state.newItemName];
    },
  });

  return (
    <div>
      <Show when={props.showInput}>
        <input
          value={state.newItemName}
          onChange={(event) => (state.newItemName = event.target.value)}
        />
      </Show>
      <div css={{ padding: "10px" }}>
        <button onClick={() => state.addItem()}>Add list item</button>
        <div>
          <For each={state.list}>{(item) => <div>{item}</div>}</For>
        </div>
      </div>
    </div>
  );
}
