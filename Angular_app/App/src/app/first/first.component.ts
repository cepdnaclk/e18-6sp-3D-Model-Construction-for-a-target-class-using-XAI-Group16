import * as THREE from "three"
import { Component, OnInit, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core';
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader'
import { saveAs } from 'file-saver';
import { HttpClient, HttpEventType, HttpHeaders} from '@angular/common/http';

// https://github.com/srivastavaanurag79/angular-three/blob/main/src/assets/robot/textures/SuperTD_mat_baseColor.png
// https://medium.com/geekculture/3d-model-three-js-scene-in-angular-7bcbc0d00c31

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})

export class FirstComponent {

  @ViewChild('canvas')
  private canvasRef!: ElementRef;

  url:any = null;
  ourfile:any = null;
  output:any = "";
  done:boolean = false;
  fileName:string = '';
  displayCanvas:any = 'none';
  //* Stage Properties

  @Input() public fieldOfView: number = 1;

  @Input('nearClipping') public nearClippingPane: number = 1;

  @Input('farClipping') public farClippingPane: number = 1000;

  //? Scene properties
  private camera!: THREE.PerspectiveCamera;

  private controls!: OrbitControls;

  private ambientLight!: THREE.AmbientLight;

  private light1!: THREE.PointLight;

  private light2!: THREE.PointLight;

  private light3!: THREE.PointLight;

  private light4!: THREE.PointLight;

  private model: any;

  private directionalLight!: THREE.DirectionalLight;

  //? Helper Properties (Private Properties);

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  private loaderGLTF = new GLTFLoader();

  private renderer!: THREE.WebGLRenderer;

  private scene!: THREE.Scene;

  private domele:any;
  /**
   *Animate the model
   *
   * @private
   * @memberof ModelComponent
   */
  private animateModel() {
    if (this.model) {
      this.model.rotation.z += 0.005;
    }
  }

  constructor(private httpClient: HttpClient) { }
  /**
   *create controls
   *
   * @private
   * @memberof ModelComponent
   */
  private createControls = () => {
    const renderer = new CSS2DRenderer();
    renderer.setSize(700, 400);
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '100px';
    document.body.appendChild(renderer.domElement);
    this.controls = new OrbitControls(this.camera, renderer.domElement);
    this.controls.autoRotate = true;
    this.controls.enableZoom = true;
    this.controls.enablePan = false;
    this.controls.update();
    this.domele =  renderer.domElement;
  };

//   envTexture.mapping = THREE.CubeReflectionMapping

  /**
   * Create the scene
   *
   * @private
   * @memberof CubeComponent
   */
  private createScene() {
    //* Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xd4d4d8)
    const loader = new PLYLoader()
    loader.load(
        '/assets/'+this.fileName,
//         '/assets/000353D.ply',
        (geometry)=> {
            geometry.computeVertexNormals()
            const mesh = new THREE.Mesh(geometry, new THREE.MeshPhysicalMaterial({
                                                        color: 0xb2ffc8,
                                                        envMap: new THREE.CubeTextureLoader().load([
                                                                      'assets/back.jpeg',
                                                                      'assets/back.jpeg',
                                                                      'assets/back.jpeg',
                                                                      'assets/back.jpeg',
                                                                      'assets/back.jpeg',
                                                                      'assets/back.jpeg'
                                                                  ]),
                                                        metalness: 0,
                                                        roughness: 0,
                                                        transparent: true,
                                                        transmission: 1.0,
                                                        side: THREE.DoubleSide,
                                                        clearcoat: 1.0,
                                                        clearcoatRoughness: 0.25
                                                    }))
            mesh.rotateX(-Math.PI / 2)
            this.scene.add(mesh)
        },
        (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
        },
        (error) => {
            console.log(error)
        }
    )

    //*Camera
    let aspectRatio = this.getAspectRatio();
    this.camera = new THREE.PerspectiveCamera(
      this.fieldOfView,
      aspectRatio,
      this.nearClippingPane,
      this.farClippingPane
    )
    this.camera.position.x = 100;
    this.camera.position.y = 100;
    this.camera.position.z = 100;
    this.ambientLight = new THREE.AmbientLight(0x00000, 100);
    this.scene.add(this.ambientLight);
    this.directionalLight = new THREE.DirectionalLight(0xffdf04, 0.4);
    this.directionalLight.position.set(0, 1, 0);
    this.directionalLight.castShadow = true;
    this.scene.add(this.directionalLight);
    this.light1 = new THREE.PointLight(0x4b371c, 10);
    this.light1.position.set(0, 200, 400);
    this.scene.add(this.light1);
    this.light2 = new THREE.PointLight(0x4b371c, 10);
    this.light2.position.set(500, 100, 0);
    this.scene.add(this.light2);
    this.light3 = new THREE.PointLight(0x4b371c, 10);
    this.light3.position.set(0, 100, -500);
    this.scene.add(this.light3);
    this.light4 = new THREE.PointLight(0x4b371c, 10);
    this.light4.position.set(-500, 300, 500);
    this.scene.add(this.light4);
  }

  private getAspectRatio() {
    return 700 / 400;
  }

  /**
 * Start the rendering loop
 *
 * @private
 * @memberof CubeComponent
 */
  private startRenderingLoop() {
    //* Renderer
    // Use canvas element in template
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true });
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(700, 400);
    let component: FirstComponent = this;
    (function render() {
      component.renderer.render(component.scene, component.camera);
      component.animateModel();
      requestAnimationFrame(render);
    }());
  }

    onClickSubmit(event: any) {
      var files = event.target.files;
      var file = files[0];
      if (files && file) {
        this.url = "/assets/"+file.name;
        this.ourfile = file;
        console.log(this.ourfile);
  //       var reader = new FileReader();
  //       reader.onload =this._handleReaderLoaded.bind(this);
  //       reader.readAsBinaryString(file);
      }else{
        this.url = null;
      }
    }

  check3d(){
    const headers= new HttpHeaders()
      .set('ngrok-skip-browser-warning','test')
      .set('responseType', 'blob' );
    this.output = 'Reconstructing...';
    var formData: any = new FormData();
    formData.append('file', this.ourfile);
    this.httpClient.post('https://a3d6-104-154-164-86.ngrok-free.app/reconstruct',formData,{ headers, responseType: 'blob' })
          .subscribe((x:any) => {
            console.log("Response Received");
            const blob = new Blob([x], { type: 'application/octet-stream' });
            this.fileName = this.ourfile.name.split('.',2)[0] + '3D.ply'; // Change this to the desired file name
            saveAs(blob, this.fileName);
            this.output = 'Reconstruction is Done. To see it please locate the '+this.fileName+' file to the assets directory.';
            this.done = true;
          });
  }

  Done(){
    this.done = false;
    this.displayCanvas = 'block';
    this.createScene();
    this.startRenderingLoop();
    this.createControls();
  }

  ngOnDestroy(){
    try{
      document.body.removeChild(this.domele);
    }catch(e){
    }
  }



}
