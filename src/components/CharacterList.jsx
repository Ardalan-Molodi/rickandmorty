function CharacterList({ characters }) {
  return (
    <div>
      {characters.map((item) => (
        <Character key={item.id} item={item} />
      ))}
    </div>
  );
}

function Character({ item }) {
  return <div>{item.name}</div>;
}

export default CharacterList;
