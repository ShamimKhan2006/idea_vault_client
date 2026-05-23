"use client";

import {Envelope} from "@gravity-ui/icons";
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";
import { User2 } from "lucide-react";
import { BiEdit } from "react-icons/bi";

export function EditModal() {
  return (
    <Modal>
    <Button  className={"bg-green-500 mb-4"}><BiEdit/>Upload Profile</Button> 
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
               <User2 className="text-green-500 flex justify-center items-center"/>
              <Modal.Heading className=" text-forground">User Information</Modal.Heading>
             
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form className="flex flex-col gap-4">
                  <TextField className="w-full" name="image" type="text" variant="secondary">
                    <Label>Image Url</Label>
                    <Input placeholder="Enter your ImageUrl" />
                  </TextField>
                  <TextField className="w-full" name="name" type="text" variant="secondary">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <TextField className="w-full" name="email" type="email" variant="secondary">
                    <Label>Email</Label>
                    <Input placeholder="Enter your email" />
                  </TextField>
                 
                  <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button slot="close" type="submit">Save</Button>
            </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
            
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}