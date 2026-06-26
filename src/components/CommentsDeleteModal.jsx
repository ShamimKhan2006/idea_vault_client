


"use client";
import React from 'react';
import {AlertDialog, Button} from "@heroui/react";
import { useRouter } from 'next/navigation';


const CommentsDeleteModal = ({r}) => {
    const router=useRouter()
   const handleDelete=async()=>{
    const res=await fetch(`${process.env.NEXT_PUBLIC_URL}/comments/${r._id}`,{
  
      method:"DELETE",
      
    })
    const data= await res.json()
     if(data.deletedCount >0){
        router.refresh()
      }
   }
    return (
          <div>
            <AlertDialog>
      <Button variant="danger">Delete</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete  permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>My Card</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button slot="close" variant="danger" onClick={handleDelete}>
                Delete 
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
        </div>
    );
};

export default CommentsDeleteModal;