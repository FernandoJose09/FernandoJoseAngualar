export interface registroResponse {
    StatusCode: number;
    Success: boolean;
    Error: boolean;
    Message: string;
    Response: Response;
}
  
interface Response {
    data: Data;
}
  
interface Data {
    Status: boolean;
    Mensaje: string;
    Token: string;
    Usuario: Usuario;
}
  
export interface Usuario {
    Id: number;
    Nombres: string;
    Correo: string;
    Contraseña: string;
    NumeroTelefono: string;
    
}