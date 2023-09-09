import { Component, OnInit } from '@angular/core';
import {ModalDismissReasons, NgbCarouselConfig, NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {ProductService} from "../services/product.service";
import {Product} from "../../shared/model/product";
import {AlertService} from "../../shared/services/alert/alert.service";
import {AddToCartComponent} from "../../cart/components/modal/add-to-cart/add-to-cart.component";

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.scss']
})
export class ProductCarouselComponent implements OnInit {

  products: Product[] | undefined;
  closeResult: string | undefined;

  constructor(private productService: ProductService,config: NgbCarouselConfig,
              private alertService: AlertService, private modalService: NgbModal) {
    // customize default values of carousels used by this component tree
    config.interval = 5000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  showAddToCartModal(productId: number | undefined): void {
    let modalRef: NgbModalRef;
    const options = {
      ariaLabelledBy: 'modal-basic-title',
      windowClass: 'app-open-modal logout-modal',
      backdropClass: 'light-blue-backdrop',
      size: 'lg',
      centered: true,
      scrollable: true
    };
    modalRef = this.modalService.open(AddToCartComponent, options);
    modalRef.componentInstance.productId = productId;

    modalRef.result.then((result) => {
      this.closeResult = `Cerrado con: ${result}`;
    }, (reason) => {
      this.closeResult = `Cerrado ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'Presionando Escape';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'Presionando afuera del recuadro';
    } else {
      return  `con: ${reason}`;
    }
  }

  ngOnInit(): void {

    this.productService.getFirstFiveProducts().subscribe({
      next: value => {
        this.products = value;
      },
      error: err => {
        this.alertService.showDanger("Ocurrio un problem tratando de obtener productos del carusel");
      }
    })
  }

}
