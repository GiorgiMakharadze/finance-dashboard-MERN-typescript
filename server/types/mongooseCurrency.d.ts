declare module "mongoose-currency" {
  import { Mongoose } from "mongoose";

  function loadType(mongoose: Mongoose): void;

  export default loadType;
}
