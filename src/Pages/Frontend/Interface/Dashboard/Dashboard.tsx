import React, { FC, useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Pagination from "../../../../Components/Pagination/Pagination";
import { useForm } from 'react-hook-form';
import itemService from "../../../../Services/itemServices";
import toast, { Toaster } from 'react-hot-toast';
import './Dashboard.css'

const PageSize = 6
const totalCount = 10
const Dashboard:FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [showModal, setShowModal] = useState(false)
  const [data, setData] = useState<any>('loading')
  const [submit, setSubmit] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = handleSubmit((data:{name: string, price: number}) => processForm(data));
  const processForm = async (data:{name: string, price: number}) => {
    setSubmit(true)
    await itemService.createItem(data).then(res => {
      setSubmit(false)
      setShowModal(false)
      toast.success('Item created succesfully', { duration: 20000, className: 'bg-success text-white' });
      window.location.reload()
    }, (error:any) => {
      setSubmit(false)
      toast.error(error.message, { duration: 20000, className: 'bg-danger text-white' });
    })
  }

  useEffect(() => {
    itemService.index(PageSize, currentPage).then((res:any) => {
      setData(res.data.data)
    }, (error:any) => {
      toast.error(error.message, { duration: 20000, className: 'bg-danger text-white' });
    })
  }, [currentPage])

  const deleteItem = (id: string) => {
    itemService.deleteItem({ id }).then((res) => {
      window.location.reload()
      toast.success('Item deleted succesfully', { duration: 20000, className: 'bg-success text-white' });
    }, (errr:any) => {
      toast.error(errr.message, { duration: 20000, className: 'bg-danger text-white' });
    })
  }
  return (
      <React.Fragment>
            <div className="col-md-10">

                <div className="row">

                    <div className="col-md-12 p-1  mt-md-5 mb-1 p-2  mt-sm-5 jus main-dash">

                        <div className="card shadow-sm mb-3 mt-4 rounded">
                            <div className="card-body py-4">
                                <div className="row">
                                    <div className="col-md-7">
                                        <h1 className="emp-page-heading">Hi, Super Admin</h1>
                                        <p>Manage store, make good profit</p>
                                    </div>
                                    <div className="col-md-5">
                                        <img src="asset/images/senateandrep.png" className="w-50"alt=""/>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="card emp-card bg-light">

                        <div className="card">
                            <div className="card-body">
                                <div className="container-fliud">
                                    <div className="row  mt-0 ">
                                        <div className="col-12">
                                            <div className="card shadow-sm">
                                                <div className="card-header">
                                                    <span className="float-left card-head-text">Product list</span>
                                                    <span className="float-right card-head-text">
                                                        <button className="btn btn-primary text-white card-head-text rounded-0 btn-sm" onClick={() => setShowModal(true)}>Add item</button>
                                                    </span>
                                                </div>
                                                <div className="card-body">
                                                    {data === 'loading' && (<div className="card-loading d-flex justify-content-center align-items-center">
                                                        <div className="spinner-border" style={{ width: "3rem", height: "3rem" }} role="status">
                                                            <span className="sr-only">Loading...</span>
                                                        </div>
                                                    </div>)}

                                                    <div className="table-responsive">
                                                        <table className="table">
                                                            <thead>
                                                                <tr>
                                                                    <th>#</th>
                                                                    <th>ID</th>
                                                                    <th>Name</th>
                                                                    <th>Price</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {data !== 'loading' && data.length > 0
                                                                  ? data.map((res:{name:string, id: string, price: number}, index: React.Key) => {
                                                                    return (<tr key={index}>
                                                                        <td>{index}</td>
                                                                        <td>{res.id}</td>
                                                                        <td>{res.name}</td>
                                                                        <td>{res.price}</td>
                                                                        <td><button className="btn border-0" onClick={() => deleteItem(res.id)}><i className="fa fa-trash text-danger"></i></button></td>
                                                                       </tr>)
                                                                  })
                                                                  : (<tr>
                                                                    <th colSpan={4} className="text-center">No data found</th>
                                                                </tr>)
                                                                }

                                                            </tbody>
                                                            <tfoot>
                                                                <tr>
                                                                    <td>#</td>
                                                                    <td>ID</td>
                                                                    <td>Name</td>
                                                                    <td>Price</td>
                                                                </tr>
                                                            </tfoot>
                                                        </table>
                                                    </div>

                                                    <div className="pagination">
                                                        <Pagination
                                                        className="pagination-bar"
                                                        currentPage={currentPage}
                                                        totalCount={totalCount}
                                                        pageSize={PageSize}
                                                        onPageChange={(page: React.SetStateAction<number>) => setCurrentPage(page)}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="col-md-1 p-0 m-0 w-100"></div>
        </div>
        <Modal show={showModal}
            onHide={() => setShowModal(false)}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header>Add product</Modal.Header>
            <Modal.Body>
                <div className="container">
                    <form className="w-100" onSubmit={onSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" {...register('name', { required: 'name cannot be empty' })} className="form-control"/>
                            <div className="text-danger">{errors.name && errors.name.message}</div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Price</label>
                            <input type="text" id="price" {...register('price', { required: 'price cannot be empty' })} className="form-control"/>
                            <div className="text-danger">{errors.price && errors.price.message}</div>
                        </div>

                        {!submit && (<button type="submit" className="btn rounded-0 w-100 btn-primary">Add</button>)}
                        {submit && (<button type="submit" className="btn rounded-0 w-100 btn-dark" disabled>
                            Please wait
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        </button>)}
                    </form>
                </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="danger" onClick={() => setShowModal(false)}>
                close
            </Button>
            </Modal.Footer>
        </Modal>
            <Toaster/>
    </React.Fragment>
  )
}
export default Dashboard
