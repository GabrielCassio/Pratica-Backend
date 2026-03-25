import type { Request, Response } from "express";
import ServiceUser from "../services/user.service";


  interface UserParams {
    userId: string;
  }

class ControllerUser {
   private userService: ServiceUser;

  constructor(){
      this.userService = new ServiceUser();
  }
  
  createUser = async (req: Request, res: Response) => {
    try {
      const {name} = req.body;

      // Go to Create UserService
      const newUser = await this.userService.create(name);

      return res.status(201).json(newUser); 
    }
    catch (error: unknown){
      if (error instanceof Error) return res.status(400).json({ error: error.message });
      
      return res.status(500).json({ error: 'O Hosting caiu.' });
    }
  };


  getUser = async (req: Request<UserParams>, res: Response) => {
    try {

      const {userId} = req.params;
      
      // Go to Get UserService
      const user = await this.userService.get(userId);

      return res.status(201).json(user);
    }
    catch (error: unknown){
      if (error instanceof Error) return res.status(400).json({ error: error.message });
    }
  };

  putUser = async (req: Request<UserParams>, res: Response ) => {
    try{
      const {userId} = req.params;
      const data = req.body;

      // Go to Put UserService
      const user = await this.userService.put(userId, data);

      return res.status(201).json(user);
    } 
    catch (error: unknown){
       if (error instanceof Error) return res.status(400).json({ error: error.message });
    }
  };

  deleteUser = async (req: Request<UserParams>, res: Response ) => {
    try {
      const {userId} = req.params;

      const user = await this.userService.delete(userId);

      return res.status(200).json(user)
    }
    catch (error: unknown){
       if (error instanceof Error) return res.status(400).json({ error: error.message });
    }
  };

};

export default ControllerUser;