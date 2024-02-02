import { Button, Modal, Backdrop, Fade } from '@mui/material';

const CheckoutModal = ({ isOpen, handleClose }) => {
  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isOpen}>
        <div className=" p-6 rounded-md">
          <div className='bg-white w-[400px] mx-auto my-auto p-10'>
          <h2 className="text-2xl text-center font-semibold mb-4">Your payment confirmed</h2>
          <Button className='mx-auto ms-20' variant="contained" color="primary" onClick={handleClose}>
            Close
          </Button>
          </div>
        </div>
      </Fade>
    </Modal>
  );
};

export default CheckoutModal;
