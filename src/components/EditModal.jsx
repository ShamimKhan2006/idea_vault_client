"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
} from "@heroui/react";

import { User2 } from "lucide-react";
import { BiEdit } from "react-icons/bi";

export function EditModal() {

  const handleEdit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const newData = Object.fromEntries(formData.entries());

    console.log("newData", newData);

    const res = await authClient.updateUser({
      name: newData.name,
      image: newData.image,
   
    });

    console.log(res);
  };

  return (
    <Modal>
      <Button className={"bg-green-500 mb-4"}>
        <BiEdit />
        Upload Profile
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">

            <Modal.CloseTrigger />

            <Modal.Header>
              <User2 className="text-green-500 flex justify-center items-center" />

              <Modal.Heading className="text-forground">
                User Information
              </Modal.Heading>
            </Modal.Header>

            <Modal.Body className="p-6">
              <Surface variant="default">

                <form
                  className="flex flex-col gap-4"
                  onSubmit={handleEdit}
                >

                  <TextField className="w-full" variant="secondary">
                    <Label>Image Url</Label>

                    <Input
                      name="image"
                      type="text"
                      placeholder="Enter your ImageUrl"
                    />
                  </TextField>

                  <TextField className="w-full" variant="secondary">
                    <Label>Name</Label>

                    <Input
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                    />
                  </TextField>

                  <TextField className="w-full" variant="secondary">
                    <Label>Email</Label>

                    <Input
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                    />
                  </TextField>

                  <Modal.Footer>
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>

                    <Button type="submit">
                      Save Changes
                    </Button>
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