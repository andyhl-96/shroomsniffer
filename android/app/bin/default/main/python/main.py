# python file used to run inference on uploaded images
# uses the CNN created using train.ipynb
import tensorflow as tf
import keras

# load the model and run inference
model = keras.models.load_model("python/model.keras")
model.summary()

# run prediction
