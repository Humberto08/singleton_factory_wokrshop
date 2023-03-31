import { Car } from '../classes/Car';
import { Motorcycle } from '../classes/Motorcycle';
import { Truck } from '../classes/Truck';
import { IVehicle } from '../interfaces/Vehicles';
import { Logger } from './../classes/Logger';




export class VehicleFactory {
    
    static createCar(type: string): IVehicle | undefined {
        const logger: Logger = Logger.getInstance();

        switch (type) {
            case 'Car':
                logger.log(`Instanciando um Carro`, "success")
                return new Car();
            case 'Truck':
                logger.log(`Instanciando um Caminhão`, "success")
                return new Truck();
            case 'Motorcycle':
                logger.log(`Instanciando uma Moto`, "success")
                return new Motorcycle();
            default:
                logger.log(`Tipo de carro inválido: ${type}`, "error");
        }
    }
}