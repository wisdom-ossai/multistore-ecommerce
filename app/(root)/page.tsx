"use client";

import Modal from "@/components/ui/modal";
import { UserButton } from "@clerk/nextjs";
import React from "react";

const SetupPage = () => {
  return (
    <div>
      <Modal
        open
        title="Hello"
        description="Test Description"
        onClose={() => {}}
      >
        Andother description
      </Modal>
    </div>
  );
};

export default SetupPage;
