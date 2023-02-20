import MuiModal from '@mui/material/Modal';
import { ImCancelCircle } from 'react-icons/im';
import { useRecoilState } from 'recoil';
import { showConfirmPopup } from '../../state/PopupState';
function ConfirmModal() {
  const [showPopup, setShowPopup] = useRecoilState(showConfirmPopup);
  const handleClose = () => {
    setShowPopup(false);
  }
  return (
    <MuiModal open={showPopup} onClose={handleClose}
      className="fixed !top-[40%] left-0 right-0 border border-white -z-50 mx-auto max-w-[508px]">
      <div className=" bg-white rounded-3xl p-8 relative z-50">
        <button onClick={handleClose} className="absolute right-10 top-10">
          <ImCancelCircle color='#828282' size={20} />
        </button>
        <div className='text-xl font-semibold mb-10 w-3/4'>
          Are you sure that you want to cancel this list?
        </div>
        <div className='flex  items-center justify-end space-x-8'>
          <button className='text-[#34333A] font-semibold'>
            Cancel
          </button>
          <button className='py-3 px-6 text-white bg-[#EB5757] rounded-xl font-bold '>
            Yes
          </button>
        </div>
      </div>
    </MuiModal>
  )
}

export default ConfirmModal