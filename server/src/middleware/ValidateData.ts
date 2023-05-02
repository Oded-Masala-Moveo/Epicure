import Joi, { ObjectSchema } from 'joi';
import { Request, Response, NextFunction } from 'express';
import { IChef,IRestaurant,IDish } from '../models';


export const ValidateSchema = (schema: ObjectSchema) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await schema.validateAsync(req.body);
            

            next();
        } catch (error) {
            console.log(error, 'error with validation');
            return res.status(422).json({ error });
        }
    };
};

// export const Schemas = {
//     chef: {
//         create: Joi.object<IChef>({
//             name: Joi.string().required(),
//             image: Joi.string().required(),
//             description: Joi.string().required(),
//             chefOfTheWeek: Joi.boolean().required()
//         }),
//         update: Joi.object<IChef>({
//             name: Joi.string().required(),
//             image: Joi.string().required(),
//             description: Joi.string().required(),
//             chefOfTheWeek: Joi.boolean().required()
//         })
//     },
//     restaurant: {
//         create: Joi.object<IRestaurant>({
//             name: Joi.string().required(),
//             chef: Joi.string()
//                 .regex(/^[0-9a-fA-F]{24}$/)
//                 .required(),
//             opens: Joi.string().required(),
//             closes: Joi.string().required(),
//             thumb: Joi.string().required(),
//             image: Joi.string().required(),
//             stars: Joi.number().required(),
//             isOpen: Joi.boolean().required(),
//             isPopular: Joi.boolean().required(),
//             isNew: Joi.boolean().required()
//         }),
//         update: Joi.object<IRestaurant>({
//             name: Joi.string().required(),
//             chef: Joi.string()
//                 .regex(/^[0-9a-fA-F]{24}$/)
//                 .required(),
//             opens: Joi.string().required(),
//             closes: Joi.string().required(),
//             thumb: Joi.string().required(),
//             image: Joi.string().required(),
//             stars: Joi.number().required(),
//             isOpen: Joi.boolean().required(),
//             isPopular: Joi.boolean().required(),
//             isNew: Joi.boolean().required()
//         })
//     },
//     dish: {
//         create: Joi.object<IDish>({
//             name: Joi.string().required(),
//             restaurant: Joi.string()
//                 .regex(/^[0-9a-fA-F]{24}$/)
//                 .required(),
//             ingredients: Joi.string().required(),
//             image: Joi.string().required(),
//             icon: Joi.string().required(),
//             price: Joi.number().required()
//         }),
//         update: Joi.object<IDish>({
//             name: Joi.string().required(),
//             restaurant: Joi.string()
//                 .regex(/^[0-9a-fA-F]{24}$/)
//                 .required(),
//             ingredients: Joi.string().required(),
//             image: Joi.string().required(),
//             icon: Joi.string().required(),
//             price: Joi.number().required()
//         })
//     }
// };
