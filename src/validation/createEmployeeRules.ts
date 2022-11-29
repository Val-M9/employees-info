import Joi from 'joi';
import { validateEmail } from './validateEmail';
import { errors } from './errors';
import { CreateEmployeeDto } from '../common/types';

export const createEmployeeRules = Joi.object<CreateEmployeeDto>({
  firstName: Joi.string()
    .required()
    .min(3)
    .max(15)
    .messages({
      'string.empty': `${errors.EMPTY}`,
      'string.min': `${errors.MIN_NAME}`,
      'string.max': `${errors.MAX_NAME}`,
    }),
  lastName: Joi.string()
    .required()
    .min(3)
    .max(15)
    .messages({
      'string.empty': `${errors.EMPTY}`,
      'string.min': `${errors.MIN_NAME}`,
      'string.max': `${errors.MAX_NAME}`,
    }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .custom(validateEmail)
    .messages({
      'string.empty': `${errors.EMPTY}`,
    }),
  phone: Joi.string()
    .required()
    .pattern(/^\d{10}$/)
    .messages({
      'string.empty': `${errors.EMPTY}`,
      'string.pattern.base': `${errors.VALID_PHONE}`,
    }),
  birthday: Joi.any().empty(''),
  position: Joi.string()
    .required()
    .messages({ 'string.empty': `${errors.EMPTY}` }),
  dateOfHiring: Joi.any().empty(''),
});
