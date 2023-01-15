'use client';
import CloseIcon from '@mui/icons-material/Close';

export const CloseIconClient = ({ onClose }: { onClose: () => void }) => (
  <CloseIcon onClick={onClose} />
);
