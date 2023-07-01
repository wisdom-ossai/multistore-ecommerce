"use client";

import Modal from "@/components/ui/modal";
import { useStoreModal } from "@/hooks/use-store-modal";
import React, { useEffect } from "react";

const SetupPage = () => {
  const onOpen = useStoreModal((state) => state.onOpen);
  const open = useStoreModal((state) => state.open);

  useEffect(() => {
    if (!open) {
      onOpen();
    }
  }, [open, onOpen]);

  return <div>Setup Page</div>;
};

export default SetupPage;
