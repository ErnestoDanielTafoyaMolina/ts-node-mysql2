import { NullableString } from '../types/Errors';
export const ErrorPost = ( title:string, description:string, ):NullableString => {
    if( !title || !description ){
        return "Please fill all fields.";
    };
    return null;
};