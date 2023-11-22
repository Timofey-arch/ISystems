import { Model, DataTypes } from "sequelize";
import sequelize from "./config";

interface PokemonListAttributes {
  id: number;
  name: string;
  url: string;
}

class PokemonList
  extends Model<PokemonListAttributes>
  implements PokemonListAttributes
{
  public id!: number;
  public name!: string;
  public url!: string;
}

export default PokemonList.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    url: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    tableName: "PokemonList",
    timestamps: false,
  },
);
