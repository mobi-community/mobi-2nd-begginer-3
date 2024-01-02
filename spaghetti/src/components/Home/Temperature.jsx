const Temperature = (weather) => {
  return (
    <>
      <p>오늘의 기온</p>
      <p>{weather?.find((el) => el.category === "T1H").obsrValue}도</p>
    </>
  );
};

export default Temperature;
