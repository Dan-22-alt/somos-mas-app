import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useToast as chakraToast } from '@chakra-ui/react';

export const useToast =
  (status, typeAction, successMsg='Accion realizada exitosamente', failMsg='Error', defaultState ) => {
  const toast = chakraToast()
  const history = useHistory()

  useEffect( ()=> {
    if(status === 'succeeded-' + typeAction){
      toast({
        title: successMsg,
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
      defaultState()
      setTimeout(()=>{
        history.push('/backoffice/testimonials')
      }
      , 2000)
    }
    if(status === 'failed-' + typeAction){
      toast({
        title: failMsg,
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
    }
  }, [status, failMsg, successMsg, toast, typeAction, history])
}
