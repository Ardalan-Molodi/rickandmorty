import { BeakerIcon, EyeSlashIcon } from '@heroicons/react/24/solid'

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
  return (
    <div className="bg-slate-800 mt-5 py-3 px-4 flex items-center justify-between rounded-lg">
      <div className="p-2">
        <img
          className="w-16 h-16 rounded-md object-contain"
          src={item.image}
          alt={item.name}
        />
      </div>

      <div className="flex-1 mx-12">
        <h2 className="text-gray-200 font-medium">
          {item.gender === "Female" ? "👧" : "👦"} {item.name}
        </h2>
        <p className="font-light">
         {item.status === "Alive" ? "✅" :"❌"} {item.status} - {item.species}
        </p>
      </div>

      <button>
              <EyeSlashIcon className="size-5 text-red-500" />
      </button>
    </div>
  );
}

export default CharacterList;
