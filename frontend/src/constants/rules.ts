import { Rule } from 'rc-field-form/lib/interface';

export const makeRequiredFormFieldRule = (message = `This field is required`): Rule => ({
    required: true,
    message: message,
});
