"use client";

import React, { FC, forwardRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ModalProps {
  title: string;
  description: string;
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const Modal: FC<ModalProps> = forwardRef<HTMLDivElement, ModalProps>(
  ({ title, description, open, onClose, children, ...props }, ref) => {
    const onChange = (isOpen: boolean) => {
      if (!isOpen) {
        onClose();
      }
    };

    return (
      <Dialog open={open} onOpenChange={onChange} {...props}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
          <DialogDescription>{description}</DialogDescription>
          {children && <div ref={ref}>{children}</div>}
        </DialogContent>
      </Dialog>
    );
  }
);

Modal.displayName = "Modal";

export default Modal;
