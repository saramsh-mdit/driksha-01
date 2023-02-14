import { AppDataSource } from "../../data-source";
import { Users } from "../../entities/users";
import { SucessResponce, ErrorResponce } from "../../@types/responceTypes";
import { UserType, UserValidator } from "../../utils/validation";


const usersSource = AppDataSource.getRepository(Users);

export const getUsers = async () => {
  try {
    const allUsers = await usersSource.find();
    return {
      message: "Request Sucessfull",
      data: allUsers,
    } as SucessResponce;
  } catch (err) {
    console.log(err)
    throw {
      message: "Some Error Occured",
      data: [],
    } as ErrorResponce;
  }
};

export const addUser = async (userData:UserType) => {
  try {
    const parsedData:UserType = await UserValidator.parseAsync(userData);
    const newUser = new Users();
    newUser.email = parsedData.email;
    newUser.isAdmin = parsedData.isAdmin;
    newUser.userName = parsedData.userName;
    newUser.password = parsedData.password;
    const data = await usersSource.save(newUser)

    return {
      message: "User added successfully",
      data: data,
    } as SucessResponce;
  } catch (err) {
    console.log(err)
    throw {
      message: "Some Error Occured",
      data: [],
      error:err
    } as ErrorResponce;
  }
};

export const deleteUser = async (id:string) => {
  try {
   
    const newUser = await usersSource.findOne({
      where: {
      _id:id
    }})
    const data = await usersSource.remove(newUser)

    return {
      message: "Deleted user successfully",
      data: data,
    } as SucessResponce;
  } catch (err) {
    console.log(err)
    throw {
      message: "Some Error Occured",
      data: [],
      error:err
    } as ErrorResponce;
  }
};