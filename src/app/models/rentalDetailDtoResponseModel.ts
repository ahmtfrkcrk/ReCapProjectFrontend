import { RentalDetailDto } from "./rentaldetaildto";
import { ResponseModel } from "./responseModel";

export interface RentalDetailDtoResponseModel extends ResponseModel{
    data:RentalDetailDto[];
}