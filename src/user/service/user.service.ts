import { Request, Response } from "express";
import { logger } from "../../common/logger/logger";
import { UserModel } from "../model/user.model";

export const signup = async (req: Request, res: Response) => {
  logger.info("Entered signup service");
  const {
    firstName,
    lastName,
    emailId,
    phoneNumber,
    address,
    userType,
    userRole,
    gender,
    dob
  } = req.body;
  logger.info("name extracted");
  if (!emailId && !phoneNumber) {
    return res.status(400).json({ error: "Email or phone number is required" });
  }
  const newUser = new UserModel({
    firstName,
    lastName,
    emailId,
    phoneNumber,
    userId: req.user.user_id,
    address,
    userType,
    userRole,
    gender,
    dob,
    lastLogin: Date.now(),
    profileCompleted: true,
    createdById: req.user.user_id,
    createdDate: Date.now(),
    lastModifiedById: req.user.user_id,
    lastModifiedDate: Date.now(),
    isActive: true,
  });
  logger.debug("user model created");
  const savedUser = await newUser.save();
  logger.info("user saved");
  // Send the saved user as a response
  res.status(201).json(savedUser);
};

export const login = async (req: Request, res: Response) => {
  logger.info("Entered login service");
  const { emailId, phoneNumber } = req.body;
  logger.info(
    `Received login request for : ${emailId ? `emailId: ${emailId}` : `phoneNumber: ${phoneNumber}`}`
  );
  const user = await UserModel.findOne({
    $or: [{ emailId }, { phoneNumber }],
  });

  // If user not found, return error
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  logger.info(
    `User with ${emailId ? `emailId: ${emailId}` : `phoneNumber: ${phoneNumber}`} successfully logged in`
  );
  res.status(200).json(user);
};

export const searchUser = async (req: Request, res: Response) => {
  try {
    const queries = req.body;
    const filters: { [key: string]: any } = {};
    for (const key in queries) {
      if (queries[key]) {
        filters[key] = new RegExp(queries[key] as string, "i");
      }
    }
    logger.info(`Search Query: ${JSON.stringify(filters)}`);
    const users = await UserModel.find(filters);
    logger.info(`Users: ${users}`);
    res.json(users);
  } catch (err) {
    logger.error(`Error occurred while searching users: ${err}`);
    res.status(500).json({ error: err.message });
  }
};

export const fetchUser = async (req: Request, res: Response) => {
  const id = req.params.id;
  logger.debug(`Fetching user details for id: ${id}`);

  const user = await UserModel.findOne({ userId:id });

  if (!user || !user.isActive ) {
    logger.warn(`User with id ${id} not found`);
    return res.status(404).json({ message: "User not found" });
  }

  logger.info(`User details fetched successfully for id: ${id}`);

  res.status(200).json(user);
};


export const updateUser = async (req: Request, res: Response) => {
  const id = req.params.id;
  logger.debug(`Updating user details for id: ${id}`);

  const user = await UserModel.findOne({ userId:id });

  if (!user || !user.isActive) {
    logger.warn(`User with id ${id} not found`);
    return res.status(404).json({ message: "User not found" });
  }

  logger.info(`User details fetched successfully for id: ${id}`);

  const {
    firstName,
    lastName,
    emailId,
    phoneNumber,
    address,
    gender
  } = req.body;

  if(firstName) user.firstName=firstName;
  if(lastName) user.lastName=lastName;
  if(emailId) user.emailId=emailId;
  if(phoneNumber) user.phoneNumber=phoneNumber;
  if(address) user.address=address;
  if(gender) user.gender=gender;

  const savedUser = await user.save()

  res.status(200).json(savedUser);
};


export const deleteUser = async (req: Request, res: Response) => {
  const id = req.params.id;
  logger.debug(`Fetching user details for id: ${id}`);

  const user = await UserModel.findOne({ userId:id });

  if (!user || !user.isActive) {
    logger.warn(`User with id ${id} not found`);
    return res.status(404).json({ message: "User not found" });
  }

  logger.info(`User details fetched successfully for id: ${id}`);

  user.isActive=false
  await user.save()

  res.status(200).json({"msg":`User with id: ${id} deleted.`});
};