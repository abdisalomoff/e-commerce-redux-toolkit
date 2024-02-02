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
        <div className="bg-white p-6 rounded-md">
          <div className='bg-orange-200 w-[400px]'>
          <h2 className="text-2xl text-center font-semibold mb-4">Zakasingiz tasdiqlandi</h2>
          <Button className='mx-auto' variant="contained" color="primary" onClick={handleClose}>
            Yopish
          </Button>
          </div>
        </div>
      </Fade>
    </Modal>
  );
};

export default CheckoutModal;