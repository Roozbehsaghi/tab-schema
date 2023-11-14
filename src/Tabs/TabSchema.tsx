export type defaultObject = {
  name: string;
  id: number;
  text: string;
};

export type myObject = {
  isClicked: boolean;
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
  table: defaultObject[];
  setTable: React.Dispatch<
    React.SetStateAction<
      {
        name: string;
        id: string;
        text: string;
      }[]
    >
  >;
};

export const TabSchema: defaultObject[] = [
  {
    name: "Tab 1",
    id: 1,
    text: "Tab 1_Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto doloribus cum tempore vel explicabo nesciunt repellat vero soluta ab voluptates?",
  },
  {
    name: "Tab 2",
    id: 2,
    text: "Tab 2_Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto doloribus cum tempore vel explicabo nesciunt repellat vero soluta ab voluptates?",
  },
  {
    name: "Tab 3",
    id: 3,
    text: "Tab 3_Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto doloribus cum tempore vel explicabo nesciunt repellat vero soluta ab voluptates?",
  },
];
