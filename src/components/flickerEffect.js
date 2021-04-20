import * as React from "react"

const FlickerEffect = ({ listWord }) => {
  const list = listWord;
  const [data, setData] = React.useState({ words: list[0], index: 0 });

  React.useEffect(() => {
    const changeEverySec = setTimeout(() => {
      data.index++;
      if (data.index >= list.length) {
        data.index = 0;
      }
      setData({ words: list[data.index], index: data.index })
    }, 2500);
    return () => {
      clearInterval(changeEverySec);
    };
  }, [list, data]);
  return (
    <span className="hideEvery2500sec"> {data.words} </span>
  )
}

export default FlickerEffect