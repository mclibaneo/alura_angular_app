import { Imprimivel } from './Imprimivel';
import { Igualavel } from './Igualavel';
export interface InterfaceAdaptada<T> extends Imprimivel , Igualavel<T>{ 

}