
import { useIsOnline } from 'react-use-is-online';


const CheckConnection = () => {

    const object = useIsOnline();

  if(object.isOffline){
    return (
        <>
            <div className='for-online'>
                    <div className="offline">
                        The internet is offline !
                    </div>
                </div>
        </>
    );
    }else if(object.error){
        return (
            <> <div className='for-online'>
            <div className="offline">
                The internet is error !
            </div>
        </div>
    
            </>
        );
    }
    
};

export default CheckConnection;