import { Logger } from './classes/Logger';
import { VehicleFactory } from './factories/VehicleFactory';


const myLogger: Logger = Logger.getInstance()


myLogger.separator();
myLogger.log('Singleton aprendido com sucesso no Gama Academy.', "success");
myLogger.separator();

VehicleFactory.createCar('Motorcycle');
VehicleFactory.createCar('Car');
VehicleFactory.createCar('Truck');




