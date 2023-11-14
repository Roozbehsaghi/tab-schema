import { defaultObject } from "./TabSchema";

type Props = {
  table: defaultObject[];
  toggleState: number;
  setToggleState: (index: any) => void;
};

const Tab = ({ table, toggleState, setToggleState }: Props) => {
  const handleClick = (tab: any) => {
    setToggleState(tab.id);
  };

  return (
    <div>
      <div className="App">
        {table.map((tab) => (
          <div key={tab.id}>
            <button
              className={toggleState === tab.id ? "Tabs" : "TabsOff"}
              onClick={() => handleClick(tab)}
            >
              {tab.name}
            </button>
          </div>
        ))}
      </div>

      <div className="Div">
        {toggleState !== 0 ? (
          <div>
            <h3 className="Content">{`Content ${toggleState}`}</h3>
            <p>{table.find((tab) => tab.id === toggleState)?.text}</p>
          </div>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default Tab;
