import tflite_runtime.interpreter as tflite
import os
from io import BytesIO
from PIL import Image
import base64
import os
import numpy as np
from pathlib import Path

labels = ['lactarius',
 'pluteus',
 'cortinarius',
 'amanita',
 'exidia',
 'inocybe',
 'boletus',
 'hygrocybe',
 'suillus',
 'russula',
 'agaricus',
 'entoloma']

def test():
    return "test"

# load the model and run inference
def load_and_run(str64):
    path = str(Path(__file__).parent) + "/model.tflite"
    #file = open(path, "r")
    barr = base64.b64decode(str64)
    #barr = barr.decode("utf-8")
    img = Image.open(BytesIO(barr))
    img = img.resize((128, 128))
    arr = np.expand_dims(np.asarray(img), axis=0).astype(np.float32)
    interp = tflite.Interpreter(model_path = path)
    interp.allocate_tensors()
    input_tensor = interp.get_input_details()
    output_tensor = interp.get_output_details()
    interp.set_tensor(input_tensor[0]['index'], arr)
    interp.invoke()

    result = interp.get_tensor(output_tensor[0]['index'])[0]

    return labels[get_label(softmax(result))]

def softmax(array):
    exp = np.exp(array)
    return exp / np.sum(exp, axis=0)

def get_label(array):
    indx = 0
    max = array[0]
    for i in range(len(array)):
        if array[i] > max:
            max = array[i]
            indx = i
    return indx


#load_and_run("")
# run prediction
