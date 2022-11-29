import Joi from 'joi';
import { errors } from './errors';

export const validateEmail = (value: string, helpers: Joi.CustomHelpers) => {
  const emailRegExp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!value.match(emailRegExp)) {
    return helpers.message({ custom: `${errors.VALID_EMAIL}` });
  }

  return value;
};
